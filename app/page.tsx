import HomePage from "./home/page";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Video Streaming & Live Events | ZoikoStream'
};
export default function page(){
return (
  <HomePage/>
)
}