import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostReview from '@/components/PostReview';

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostReview 
      key={post.slug}
      title={post.title}
      subtitle={post.subtitle}
      slug={post.slug}
      date={post.date}
    />
  ));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  )
}

export default page