import React from 'react'
import {useRouter} from "next/router"
import Link from 'next/link';
import { server } from '../../config';
import { resolve } from 'styled-jsx/css';
import Meta from '../../components/Meta';


const article = ({article}) => {
    // const router= useRouter();
    // const {id} = router.query
  return (
    <div>
      <Meta title={article.title} description={article.body}></Meta>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br></br>
        <Link href='/'>Go back</Link>
       
    </div>
  )
}

export default article;


  export  const getStaticProps = async(context)=>{

  const res = await fetch (` ${server}/api/article/${context.params.id}`);
  const article =  await res.json()

  return{
    props:{
      article

    }
  }
 }
 //using getStaticProps to fetch data dynamically from api
export const getStaticPaths= async()=>{
    
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
    const ids= articles.map(article =>(article.id));
     const paths = ids.map(id=>({params:{id:id.toString()}}))


    return{
       
               paths,
               fallback:false,
            }
        

    

 }


//  export const getStaticProps= async( context)=>{

//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article=await res.json();
//     return {props:{
//         article
//     }}

//  }

 // getserversideprops
//  export const getServerSideProps= async( context)=>{

//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article=await res.json();
//     return {props:{
//         article
//     }}

//  }


