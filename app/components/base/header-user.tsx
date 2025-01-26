import { useNavigate } from '@remix-run/react';
import { Button } from '~/components/ui/button';
const HeaderUser = () => {
  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate('/login');
  }
  return (
    <>
      <Button onClick={handleNavigateSignIn}>
        Sign in
      </Button>
    </>
  )
}

export default HeaderUser;