import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";  
import { Progress } from "@/components/ui/progress";
//import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home(){
  return(
    <div className="p-4">
      <div className=" flex flex-col gap-y-4 ">
      <div>
        <Button variant="elevated">
          I Am Button
        </Button>
      </div>
      <div className="">
        <Input placeholder="I am a input" />
      </div>
      <div>
        <Progress value={50}/>
      </div>
      <div>
        <Input type="text" placeholder="I am a text area" />
        </div>  
      <div>
        <Checkbox />
      </div>
    </div>
    </div>
  )
}