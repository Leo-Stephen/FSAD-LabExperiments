package klu;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private RestTemplate restTemplate;
    
    @GetMapping("/calculate")
    public String calculateSum(@RequestParam int a, @RequestParam int b) {
        // Call calc-service using service discovery
        Integer result = restTemplate.getForObject(
            "http://calc-service/calc/add?a={a}&b={b}", 
            Integer.class, 
            a, b);
            
        return "The sum calculated by calc-service is: " + result;
    }
}