import { useAppDispatch } from 'src/app/hooks/redux';
import { authUser } from 'src/app/store/slices/user/UserSlice';
import { USER_ID_KEY } from 'src/shared/const/localStorage';
import { Button } from 'src/shared/ui';

const PrivateMain = () => {
    const disaptch = useAppDispatch();

    return (
        <div>
            PrivateMain
            <Button onClick={() => {
                disaptch(authUser({
                    email: null,
                    id: null,
                }));
                localStorage.removeItem(USER_ID_KEY);
            }}>Log out</Button>
        </div>
    );
};

export default PrivateMain;