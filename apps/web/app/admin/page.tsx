import Admin from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box";

export default function Page(): JSX.Element {
    return (
        <div>
            Welcome to the admin page!
            <Admin />

            <InputBox />    
        </div>
    )
}