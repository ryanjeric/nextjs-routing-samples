// Catch All Routes Sample
import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log("SLUG", router.query);
  return (
    <div>
      <h1>The blog post</h1>
    </div>
  );
}
export default BlogPostPage;
