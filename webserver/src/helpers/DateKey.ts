import random from 'randomstring';
// import { createLogicalAnd } from 'typescript';

export default function(length: any) {
  const options: any = {
    length: length||8,
    capitalization: 'lowercase',
  };
  return `${Date.now()}_${random.generate(options)}`;
}

