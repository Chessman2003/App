
export interface ICategory {
    id: string
    title: string
    icon: string
    elements: IElement[]
}

export interface IElement {
    id: string
    name: string
}

export enum SideBarType {
    Open = 'open',
    Close = 'close'
}

export enum SortDirection {
    Forward = '1',
    Back = '-1'
}