import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/updatedBlogPosts';
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

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
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
        description={post.metaDescription || post.excerpt}
        imageUrl={post.imageUrl}
        keywords={post.keywords}
        isBlogPost={true}
        publishDate={new Date(post.date).toISOString()}
        author={post.author}
        category={post.category}
        type="article"
      />
      
      {/* Global starfield background */}
      <div className="fixed inset-0 z-0">
        <Safe3D fallback={<FallbackBackground />}>
          <ThreeBackground />
        </Safe3D>
      </div>
      
      <article className="relative z-10 w-full">
        {/* Hero Section - Clean minimal design */}
        <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
          {/* Background with image */}
          {post.imageUrl && (
            <div className="absolute inset-0">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-wrlds-dark via-wrlds-dark/95 to-wrlds-dark"></div>
            </div>
          )}
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-wrlds-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-wrlds-blue/5 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-16">
            <div className="max-w-4xl">
              {/* Back link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm font-medium group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to News
              </Link>
              
              {/* Category badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-wrlds-blue/20 text-wrlds-blue rounded-full text-xs font-semibold uppercase tracking-wider border border-wrlds-blue/30">
                  {post.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mb-8">
                {post.excerpt}
              </p>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wrlds-dark to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <EnhancedBlogContent content={post.content} />
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostDetail;
