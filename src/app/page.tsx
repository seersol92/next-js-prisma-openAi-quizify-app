import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

type Props = {};

const App = async (props: Props) => {
  const session = await getAuthSession();
  if(session?.user) {
    redirect('dashboard');
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[400px] h-[400px]">
      <CardHeader>
          <CardTitle>Welcome to Quizzzy 🔥!</CardTitle>
          <CardDescription>
            Quizify is a platform for creating quizzes using AI!. Get started by
            loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
