export interface ListAll {
  data: ListItems[];
}

export interface ListItems {
  author: string;
  cdate: string;
  title: string;
  connect: number;
  status: number;
  type: string;
  udate: string;
  volume: string;
  uuid: string;
  advertiseData: AdvertiseData[];
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
