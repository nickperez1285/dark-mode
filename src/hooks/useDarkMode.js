import {useLocalStorage} from "./useLocalStorage.js"
import {useEffect} from "react"

export function useDarkMode() {
 const [dark, setDark] = useLocalStorage("dark")

	useEffect(()=>{

		console.log(dark)
		 const bod = window.document.body

		if(dark) {
	      bod.classList.add('dark-mode');
	    } else {
	      bod.classList.remove('dark-mode');
	    }
	}, [dark])
	return [dark, setDark]

}
export default useDarkMode