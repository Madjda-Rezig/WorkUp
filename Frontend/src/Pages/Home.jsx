import { toast } from "react-toastify";

import Herohome from "../components/Hero/Herohome.jsx";
import Categorie from "../components/Categorie/Categorie.jsx";
import Faqhome from "../components/FAQ/Faqhome.jsx";
export default function Home() {
  return (
    <div>
      <Herohome />
      <Categorie />
      <Faqhome />
    </div>
  );
}
