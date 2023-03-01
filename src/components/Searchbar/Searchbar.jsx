import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button, Form, Header, Icon, Input } from './Searchbar.styled';

export const Searchbar = () => (
  <Header class="searchbar">
    <Form class="form">
      <Button type="submit" class="button">
        <Icon class="button-label">
          <BsSearch />
        </Icon>
      </Button>

      <Input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </Form>
  </Header>
);
