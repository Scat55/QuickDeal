import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Person {
  name: string;
  coins: number | undefined;
  avatar: string;
}

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref(false);
  const person = ref<Person>({
    name: '',
    coins: 0,
    avatar: '',
  });

  const getInfoAboutPerson = async (id: number, coins?: number) => {
    await axios
      .get(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then((res) => {
        isAuth.value = true;
        person.value.name = res.data.name;
        person.value.avatar = res.data.avatar;
        person.value.coins = coins;
      });
  };

  return { isAuth, person, getInfoAboutPerson };
});
