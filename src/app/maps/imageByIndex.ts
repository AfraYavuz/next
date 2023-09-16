import bind from "@/assets/images/maps/bind.map.png";
import breeze from "@/assets/images/maps/breeze.map.png";
import fracture from "@/assets/images/maps/fracture.map.png";
import haven from "@/assets/images/maps/haven.map.png";
import icebox from "@/assets/images/maps/icebox.map.png";
import lotus from "@/assets/images/maps/lotus.map.png";
import pearl from "@/assets/images/maps/pearl.map.png";

export const images: string[] = [
  bind,
  breeze,
  fracture,
  icebox,
  haven,
  lotus,
  pearl,
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
