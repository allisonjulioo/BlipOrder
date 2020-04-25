import Moment from "moment";

export const cultures = {
  "pt-BR": "DD/MM/YYYY",
  en: "MM/DD/YYYY",
};
export const dateFormat = (date, timeZone) => {
  Moment.locale(timeZone);
  return Moment(date).format(cultures[timeZone]);
};

export const obamaPictures = [
  "https://i.insider.com/5aac3c88b085c0cf118b4748?width=750&format=jpeg&auto=webp",
  "https://cdn.vox-cdn.com/thumbor/rNDHbQs3-6s0UG-G4HTmoS26CYE=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/12372787/8c71f40ab93eee7d641dd1122654d117_original.0.jpeg",
  "https://i.pinimg.com/originals/2e/39/6a/2e396ad573a340afbb94ff06aef46d00.jpg",
  "https://i.pinimg.com/originals/91/dd/49/91dd497baf6de4255e2c653c873a8cb6.jpg",
  "https://lh3.googleusercontent.com/proxy/FX7mNUEws23cxtUlUPgwkRG1n-E9qcGCmUhVe11KFgp0tsunKr7NSQpCochtwPulCjjJMAyPUt3L-r37Drvut_90X7kEEOvlr7diqBFeV7dYmiCRpxTV8E7GbeWEZHf9NDw",
  "https://abrilveja.files.wordpress.com/2017/05/obama-berlim-02.jpg",
  "https://www.infomoney.com.br/wp-content/uploads/2019/06/obama-sorrindo.jpg?fit=900%2C608&quality=75&strip=all",
];
