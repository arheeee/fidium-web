import Link from "next/link";
import FeatureCardButton from "@components/modules/featurecard/FeatureCardButton"
import { Button } from "@mui/material"
import "@base/tempHome.scss"

export default function Home() {

  return (
    <div className="home_div">

      <h1>Temporary Home Page</h1>
      <h3>Click the button to navigate to view the individual components</h3>
      <br />
      <div className="temp_link">
        <Link className="temp_link" href="/hero">
          <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Hero Card</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/footer">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Footer</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/static-cards">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Static Cards</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/faqs">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">FAQs</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/content-block">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Content Block</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/expandible-cards">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Expandible Cards</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/testimonials">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Testimonials</Button>
        </Link>
      </div>
      <div className="temp_link">
        <Link href="/maps">
        <Button className="temp_button" sx={{ backgroundColor: "#003595" }} variant="contained">Maps</Button>
        </Link>
      </div>
    </div>
  );
}
