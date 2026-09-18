
import Container from "@/components/Container";
import { getBanners } from "@/lib/api";
import BannerSlider from "./BannerSlider";


export default async function Banner() {
const banners = await getBanners();
    console.log("restaurants data", banners);
  return (
    <Container className="pt-6 pb-8">
    <BannerSlider banners={banners} />
    </Container>
  );
}
