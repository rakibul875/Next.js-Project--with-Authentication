import { redirect } from "next/navigation";

const default_category_Id='01'

const Home = async () => {
  redirect(`/category/${default_category_Id}`)
};

export default Home;