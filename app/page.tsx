import { getAllPosts } from "@/api";
import CalculateForm from "@/components/CalculateForm";
import SalarySummary from "@/components/SalarySummary";

export default async function Home() {
  const posts = await getAllPosts(); 
  console.log(posts);

  return (
    <div className=" md:flex justify-between m-20 m">
      <CalculateForm posts={posts}/>
      <SalarySummary />
    </div>
  );
}
