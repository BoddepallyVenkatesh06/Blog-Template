import { blog1, blog2, blog3, blog4, blog5, blog6 } from "../public/assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12">
      <BlogCard
        image={blog1}
        title="5 Canva design mistakes to do it no more"
        subTitle="January 31, 2023"
        btnText="Design Tips"
      />
      <BlogCard
        image={blog2}
        title="7 Tips for choosing your business name"
        subTitle="January 24, 2023"
        btnText="Branding Tips"
      />
      <BlogCard
        image={blog3}
        title="10 Creative Social Media Content Ideas"
        subTitle="January 16, 2023"
        btnText="Marketing"
      />
      <BlogCard
        image={blog4}
        title="10 Creative Social Media Content Ideas"
        subTitle="January 16, 2023"
        btnText="Marketing"
      />
      <BlogCard
        image={blog5}
        title="7 Tips for choosing your business name"
        subTitle="January 24, 2023"
        btnText="Branding Tips"
      />
      <BlogCard
        image={blog6}
        title="5 Canva design mistakes to do it no more"
        subTitle="January 31, 2023"
        btnText="Design Tips"
      />
    </div>
  );
};

export default Blog;
