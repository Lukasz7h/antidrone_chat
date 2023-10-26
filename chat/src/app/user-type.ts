export interface UserType{
    [key: string]:{ 
        messages: string[],
        date: Date
    }
}

export type user = keyof UserType;