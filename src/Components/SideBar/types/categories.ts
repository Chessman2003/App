
export interface ICategory {
    title: string
    icon: string
    elements: string[]
}

export enum SideBarType {
    Open = 'open',
    Close = 'close'
}

export enum SortDirection {
    Forward = '1',
    Back = '-1'
}