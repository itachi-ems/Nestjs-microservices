import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  
  //create a logger instance
  private logger = new Logger('AppController');

  //inject the math service
  constructor(private mathService: MathService) { }
  
  //Define message pattern for this method
  @MessagePattern('add')
  //logic to be implemented
  async accumulate(data: number[]) {
    this.logger.log('Adding' + data.toString())// log something to every call
    return this.mathService.accumulate(data);//cal result and return 
  }

  
}
