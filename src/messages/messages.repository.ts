import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    // read entire contents of file
    const contents = await readFile('messages.json', 'utf8');
    // parse contents from JSON
    const messages = JSON.parse(contents);
    // return messages at id
    return messages[id];
  }

  async findAll() {
    // read entire contents of file
    const contents = await readFile('messages.json', 'utf8');
    // parse contents from JSON
    const messages = JSON.parse(contents);
    // return entire list of messages
    return messages
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor((Math.random() * 999))

    messages[id] = { id, content } // using shortened syntax where prop key is same as value

    await writeFile('messages.json', JSON.stringify(messages))
  }
}