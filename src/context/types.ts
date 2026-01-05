
export type TState = 'idle' | 'pending' | 'succeeded' | 'failed'

export type initGlobalSliceType = {
    resume: {
        state: TState
        data?: string
    }
}