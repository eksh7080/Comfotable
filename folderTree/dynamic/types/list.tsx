export interface ListAll {
  data: ListItemAll[];
}

export interface ListItems {
  author?: string;
  cdate?: string;
  connect?: number;
  status?: number;
  title?: string;
  type?: string;
  path_uuid?: string;
  udate?: string;
  volume?: string;
  isfolder?: string;
  file?: ListTreeItems[];
  child?: ListTreeChildItems[];
  // advertiseData: AdvertiseData[];
}

export interface AdvertiseData extends ChildrendItems {
  children: ChildrendItems[];
}

export interface ChildrendItems {
  title: string;
  name: string;
  id: string;
  volume: string;
}

export interface ListItemAll {
  folder: ListTreeItems[];
  file: ListTreeItems[];
}

export interface ListTreeItems {
  author: string;
  cdate: string;
  connect?: number;
  status?: number;
  title: string;
  type?: string;
  path_uuid: string;
  udate: string;
  volume: string;
  isfolder: string;
  file?: ListTreeItems[];
  child?: ListTreeChildItems[];
}

export interface ListTreeChildItems {
  category: string;
  id: string;
  name: string;
  volume: string;
  child?: ListTreeChildItems[];
  profile?: string;
}
