import {Injectable} from 'angular2/core';

@Injectable()
export class SampleService {
    
    getSampleData() {
        return ["Record 1", "Record 2", "Record 3"];  
    }
}