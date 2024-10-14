export type Task = {
  id: number
  text: string
  completed: boolean
}

export enum Filter {
  All = 'all',
  Active = 'active'
}
