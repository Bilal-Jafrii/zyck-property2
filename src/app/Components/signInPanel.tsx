import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User, // Renamed import to avoid conflict
} from "@nextui-org/react";
import UserProfilePanel from './UserProfilePanel';
import prisma from '@/lib/prisma';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const SignInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();

  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    return <>{dbUser && <UserProfilePanel user={dbUser} />}</>;
  }

  return (
    <HoverCard>
      <HoverCardTrigger>
        <User
          name=""
          as="button"
          avatarProps={{
            isBordered: true,
            src: '/Profile.jpg',
          }}
          className="transition-transform"
        />
      </HoverCardTrigger>
      <HoverCardContent className=' bg-black bg-opacity-75' aria-label="User Actions">
        <div className='w-full flex justify-between items-center gap-7'>
          <div className=' w-5 flex flex-col'>
            <h1 className='text-sm font-black text-white'>Kindly Do Authentication</h1>
          </div>
          <div>

            <ul className='flex flex-col justify-center items-end gap-2'>
              <li>
                <button className='bg-green-600 p-3 rounded-md'>
                  <LoginLink>Sign In</LoginLink>
                </button>
              </li>
              <li>
                <button className='bg-slate-600 p-2 rounded-md '>
                  <RegisterLink>Sign Up</RegisterLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SignInPanel;
