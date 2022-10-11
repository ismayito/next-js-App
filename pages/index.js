import Head from 'next/head'
import Article from '../components/Article';
import { server } from '../config';
export default function Home({articles}) {

  console.log(articles)
  return (
    <div >
      <Head>
        <title>eb dev newz</title>
        <meta name="keywords" content="web news programming"></meta>
      </Head>
      <Article articles={articles}></Article>
    
     
    </div>
  )
}

// fetching data from our created API
export const getStaticProps=async()=>{
  const res= await fetch(`${server}/api/article`);
  const articles=await res.json();
  return {
    props:{
      articles
    }
  }
}
// fetching data from online API
// export const getStaticProps=async()=>{
//   const res= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles=await res.json();
//   return {
//     props:{
//       articles
//     }
//   }
// }



