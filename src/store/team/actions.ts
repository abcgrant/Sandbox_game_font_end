import {default as auth} from '@/api/auth.ts';
import Swal from 'sweetalert2';
import router from '@/router';
import store from '@/store';
import {State} from '@/store/team/state';

interface teamForm {
  gameID: string;
  teamName: string;
}

export default {
  submit({state}: { state: State }, teamForm: teamForm): Promise<unknown> {
    console.log(state);
    return auth.submit(store.state.user.userinfo.token, teamForm.gameID, teamForm.teamName).then((r: any) => {
      console.log(r)
      if (r.status === 200) {
        Toast.fire({
          icon: 'success',
          title: '注册队伍成功'
        }).then(() => router.push({path: '/t'}).catch(err => (console.log(err))));
      }
    });
  },
  refreshAndSubmit({state}: { state: State }): Promise<unknown>{
    console.log(store.getters.teamStatus)
    return auth.refreshAndSubmit(store.getters.teamStatus)
      .then(
        (r: any) => {
          console.log(r)
          if (r.status === 200) {
            Toast.fire({
              icon: 'success',
              title: '刷新提交成功'
            }).then(() => router.push({path: '/t'}).catch(err => (console.log(err))))
          }
        }
      )
  }
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500
});