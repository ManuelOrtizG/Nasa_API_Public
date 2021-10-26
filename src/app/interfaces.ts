export interface TodayData {
  copyright: String;
  date: String;
  explanation: String;
  hdurl: String;
  media_type: String;
  service_version: String;
  title: String;
  url: String;
}

interface Rover {
  id: Number;
  name: String;
  landindg_date: String;
  launch_date: String;
  status: String;
}

interface Camera {
  id: String;
  name: String;
  rover_id: Number;
  full_name: String;
}

export interface PhotoData {
  id: Number;
  sol: String;
  camera: Camera;
  img_src: String;
  earth_date: String;
  rover: Rover;
}

export type PhotoDatas = Array<PhotoData>;
