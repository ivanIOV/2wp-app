import { createLocalVue, mount } from '@vue/test-utils';
import DeviceErrorDialog from '@/components/exchange/DeviceErrorDialog.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify: any;

describe('DeviceErrorDialog', () => {
  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should emit "closeErrorDialog" event when "Close" button is clicked', async () => {
    const wrapper = mount(DeviceErrorDialog, {
      localVue,
      vuetify,
      propsData: {
        showErrorDialog: true,
        errorMessage: 'Sample error message',
        errorType: '',
        urlToMoreInformation: '',
        messageToUserOnLink: '',
        installationLink: '',
        messageInstallationToUser: '',
      },
    });
    await wrapper.find('.whiteish').trigger('click');
    expect(wrapper.emitted('closeErrorDialog')).toBeTruthy();
  });
});