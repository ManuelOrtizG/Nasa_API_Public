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
  id: string;
  name: string;
  landindg_date: string;
  launch_date: string;
  status: string;
}

interface Camera {
  id: String;
  name: String;
  rover_id: String;
  full_name: String;
},

export interface PhotoData {
 id: String;
 sol: String;
 camera: Camera;
 img_src: String;
 earth_date: String;
 rover: Rover;
}