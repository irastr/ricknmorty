import { useRef, useEffect } from 'react'

//Runs after each dep update without first render
export default function useEffectAfterMount (cb, deps) {
    const componentJustMounted = useRef(true);
    useEffect(() => {
        if (!componentJustMounted.current) {
            return cb() ;
            // why not just cb()?  cb() and return cb() will work the same if console.log('hello') is passed, BUT if we want the function to be called before unmount =>
            //with return cb() we can  pass as cb () => console.log('hello') and it'll work, unlike cb() without return
        }
        componentJustMounted.current = false
    }, deps)
}
