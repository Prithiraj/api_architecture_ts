import ajvInstance from '../ajv-instance';
import { prismaMigrations_ajv } from '../mapper_ajv';


const prismaMigrations_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['checksum'],
    properties: { apicolname: prismaMigrations_ajv.checksum.api},	
  },{
    required: ['finishedAt'],
    properties: { apicolname: prismaMigrations_ajv.finishedAt.api},	
  },{
    required: ['startedAt'],
    properties: { apicolname: prismaMigrations_ajv.startedAt.api},	
  },{
    required: ['id'],
    properties: { apicolname: prismaMigrations_ajv.id.api},	
  },{
    required: ['appliedStepsCount'],
    properties: { apicolname: prismaMigrations_ajv.appliedStepsCount.api},	
  },{
    required: ['rolledBackAt'],
    properties: { apicolname: prismaMigrations_ajv.rolledBackAt.api},	
  },{
    required: ['migrationName'],
    properties: { apicolname: prismaMigrations_ajv.migrationName.api},	
  },{
    required: ['logs'],
    properties: { apicolname: prismaMigrations_ajv.logs.api},	
  },]
};

export default ajvInstance.compile(prismaMigrations_schema);
