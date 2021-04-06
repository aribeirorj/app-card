import { api } from '../infra';
import { MessageError } from '../messages';

export async function getService(param) {
  try {
    return await api.get(param);
  } catch (e) {
    MessageError();
  }
}
