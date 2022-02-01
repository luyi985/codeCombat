interface ErrorResponse {
    code: '500' | '502' | '503' | '404';
    message: string;
}

interface SuccessResponse {
    code: '200' | '204';
    value: number;
}
class MockResponse {
    private readonly list: Array<ErrorResponse | SuccessResponse>;
    private timeOut: any;
    constructor() {
        this.list = [];
        this.timeOut = undefined;
    }
    mock = (input: ErrorResponse | SuccessResponse) => {
        this.list.push(input);
        return this;
    };
    run = (v: number, delay: number = 0): Promise<ErrorResponse | SuccessResponse | undefined> => {
        const current = this.list.shift();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!current) return resolve(undefined);
                if (['200', '204'].includes(current.code)) {
                    const success: SuccessResponse = current as SuccessResponse;
                    return resolve({ ...success, value: v + success.value });
                }
                return reject(current);
            }, delay * 1000);
        });
    };
}
console.log('MOCK====');
const reqA = new MockResponse();
const reqB = new MockResponse();
const reqC = new MockResponse();

reqA.mock({ code: '200', value: 1 });
reqB.mock({ code: '500', message: 'failed 1' })
    .mock({ code: '500', message: 'failed 2' })
    .mock({ code: '500', message: 'failed 3' })
    .mock({ code: '200', value: 2 });

reqC.mock({ code: '200', value: 3 });

// ===========================================;
const withRetry =
    (asyncAction: (args: number) => Promise<any>, retryTimes: number = 3) =>
    async (args: number): Promise<SuccessResponse> => {
        let currentRety = retryTimes;
        while (true) {
            try {
                return await asyncAction(args);
            } catch (e) {
                if (currentRety <= 0) {
                    throw new Error((e as any).message);
                }
                console.log(`Failed try with arg ${args}, left retry times ${currentRety}`);
                currentRety--;
            }
        }
    };
const reqAWithRetry = withRetry(reqA.run);
const reqBWithRetry = withRetry(reqB.run);
const reqCWithRetry = withRetry(reqC.run);
const showResult = async () => {
    const a = await reqAWithRetry(0);
    const b = await reqBWithRetry(a.value);
    const c = await reqCWithRetry(b.value);
    console.log(c);
};

showResult();
