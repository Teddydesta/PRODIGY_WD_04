import styles from './navbar.module.css'

const Navbar=()=>{
    const links=[
        {
          id:1,
          title:'Home',
          url:'/'
        },
        {
          id:1,
          title:'about',
          url:'/about'
        },
        {
          id:1,
          title:'portfolio',
          url:'/portfolio'
        },
        {
          id:1,
          title:'contact',
          url:'/contact'
        },
      ]
    
    return (
        <div className={styles.container}>
           
            <a href="/" className={styles.logo}>Logo</a>
            <div className={styles.links}>
                {links.map((link=>(
                    <a href={link.url} key={link.id} className={styles.link}>{link.title}</a>
                    
                )))}

            </div>

        </div>
    );
}
export default Navbar;