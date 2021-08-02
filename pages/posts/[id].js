import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { getAllPostIds, getPostData } from "../../lib/posts";



//詳細ページのview。components->Post.jsは一覧ページから個別ページへのリンクを貼る
export default function Post({ post }) {
    const router = useRouter();


    if (router.isFallback || !post) {
        return <div>Loading...</div>
    }

    return (
        <Layout title={post.title}>

            {/* m-4:  margin: 1rem 16px */}
            <p className="m-4">
                {"ID : "}
                {post.id}
            </p>


            {/* text-xl font-size:1.25rem; line-height: 1.75rem ; 20px 28px */}
            <p className="mb-4 text-xl font-bold">{post.title}</p>
            <p className="mb-12">{post.created_at}</p>

            {/* px-10 padding-left: 2.5rem; padding-right: 2.5rem  40px */}
            <p className="px-10">{post.content}</p>

            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                    <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        />
                    </svg>

                    <span>Back to blog-page</span>


                </div>
            </Link>



        </Layout>


    );

}



//ビルド時に実行
export async function getStaticPaths() {
    const paths = await getAllPostIds();

    return {

        // fallbackをtrueにすることで、動的に変化

        paths,
        fallback: true,
    };


}


//paramsはidの情報を含む
export async function getStaticProps({ params }) {
    const post = await getPostData(params.id);


    //propsという名前でpostが返却される
    //↑のPostコンポーネントのpropsに渡される
    return {
        props: {
            post,
        },

        //ISR
        revalidate: 3,


    };



}