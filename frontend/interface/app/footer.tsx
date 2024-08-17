import { FaLinkedin,FaGithub } from "react-icons/fa"
export default function footer(){
    return(
        <div className="flex bg-gray-200 mt-96 h-full">
          <div><h1 className='text-2xl'>Developed By</h1>
            <h4>Viswanath Parashuram Yadavalli</h4></div>
            <div className='border border-black bg-black h-32 w-0.5 ml-96 mr-10'></div>
            <ul className='flex ml-24'><li><a className='flex' href='https://www.linkedin.com/in/viswanath-parashuram-yadavalli-65503628b/'>LinkedIn:<FaLinkedin className="mt-1"/></a></li><li className='ml-10'><a className='flex' href='https://github.com/Vishwanaathh'>GitHub:<FaGithub className='mt-1'/></a></li></ul>
        </div>
    )

}