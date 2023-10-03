import styles from './navBar.module.css'
const links=[
    {
        id:1,
        title:"Home",
        url:'/'
    },
    {
        id:2,
        title:"About",
        url:'/about'
    },
    {
        id:3,
        title:"services",
        url:'/'
    },
    {
        id:4,
        title:"Contact",
        url:'/contact'
    },
]


const Navbar=()=>{
 
    return (
  <div className={styles.container}>
    
        <a href="/" className={styles.logo}>Logo</a>
   
   <div className={styles.links}>
    {links.map(link=>(
        <a href={link.url} key={link.id} className={styles.link}  >{link.title}</a>

    ))}
   </div>
  
  </div>
    );
  }
  
  export default Navbar;