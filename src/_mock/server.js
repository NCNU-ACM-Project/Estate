import MockAdapter from 'axios-mock-adapter';
import {userRequest} from '../services/server';
let mockApi = new MockAdapter(userRequest);

mockApi.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});
