import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/documents/*.graphql'],
  path: join(process.cwd(), 'src/documents/graphql.ts'),
  outputAs: 'class',
  watch: true,
  // emitTypenameField: true,
});


