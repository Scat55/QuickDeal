import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Person {
  name: string;
  coins: number;
}

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref(false);
  const person = reactive<Person>({
    name: '',
    coins: 0,
  });

  const getInfoAboutPerson = (id: number) => {
    axios.get(`https://api.escuelajs.co/api/v1/users/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  const setIsAuth = (value: boolean) => {
    isAuth.value = value;
  };
  return { isAuth, person, setIsAuth, getInfoAboutPerson };
});
