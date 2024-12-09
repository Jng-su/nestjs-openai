import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.request';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chatcompletion')
  async createChatCompletion(
    @Body() createChatCompletionRequest: CreateChatCompletionRequest,
  ) {
    return this.openaiService.createChatCompletion(
      createChatCompletionRequest.messages,
    );
  }
}
