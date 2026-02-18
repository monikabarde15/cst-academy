import { useParams } from 'react-router-dom';
import { updatedCourses } from '@/data/updatedCourses';
import { cyberBlogs } from "@/data/cyberBlogs";
import { EthicalHacking } from "@/data/EthicalHacking";
import { BugBunty } from '@/data/BugBunty';
import { Cehv13 } from '@/data/Cehv13';


import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import EnhancedBlogContent from '@/components/EnhancedBlogContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBackground from '@/components/ThreeBackground';
import Safe3D from '@/components/Safe3D';

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-wrlds-dark overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wrlds-blue/10 rounded-full blur-[150px] animate-pulse-slow"></div>
  </div>
);

const CoursePostDetail = () => {
  const { slug } = useParams<{ slug: string }>();

const simplePost = cyberBlogs.find(
  (blog) => blog.slug === slug
);

const Cehv13Post = Cehv13.find(
  (Cehv13) => Cehv13.slug === slug
);


const BugBuntyPost = BugBunty.find(
  (BugBuntys) => BugBuntys.slug === slug
);

const EthicalHackingPost = EthicalHacking.find(
  (BugBuEthicalHackingntys) => BugBuEthicalHackingntys.slug === slug
);

const advancedPost = updatedCourses.find(
  (course) => course.slug === slug
);

const post = simplePost || advancedPost || BugBuntyPost || EthicalHackingPost || Cehv13Post;



  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO
        title={`${post.title} - WRLDS`}
        description={post.content || post.excerpt}
        imageUrl={post.imageUrl}
        keywords={post.keywords}
        isBlogPost
        publishDate={post.date}
        author={post.author}
        category={post.category}
        type="article"
      />

      <article className="relative z-10 w-full">

        {/* HERO SECTION */}
        <div className="relative min-h-[80vh] flex items-center">

          {post.imageUrl && (
            <div className="absolute inset-0">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/4" />
            </div>
          )}

          <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 max-w-4xl">

            <Link
              to="/blog"
              className="inline-flex items-center text-white/60 hover:text-white mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>

            <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs uppercase">
              {post.category}
            </span>

            <h1 className="text-5xl font-bold text-white mt-6 mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-white/70 mb-6">
              {post.excerpt}
            </p>

            <div className="flex gap-6 text-white/50 text-sm">
              <span>{post.date}</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <div
  className="prose prose-invert max-w-none"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

        </div>

      </article>
    </PageLayout>
  );
};


export default CoursePostDetail;
